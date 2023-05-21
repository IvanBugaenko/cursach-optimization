import numpy as np
from typing import Tuple


def ordered_crossing_individual(parent1: np.ndarray, parent2: np.ndarray) -> Tuple[np.ndarray, np.ndarray]:
    N = parent1.shape[0]

    rng = np.random.default_rng()
    idx = np.sort(rng.choice(range(1, N - 1), replace=False, size=2))

    parents = np.vstack((parent1, parent2))
    children = np.full_like(parents, -1)

    children[:, idx[0]:idx[1] + 1] = parents[::-1, idx[0]:idx[1] + 1]
    genes = np.c_[parents[:, idx[1] + 1:], parents[:, :idx[1] + 1]]

    child1, child2 = children

    for child, gene in zip((child1, child2), genes):
        for i in range(idx[1] + 1, N):
            for gen_idx in range(N):
                if gene[gen_idx] not in child:
                    child[i] = gene[gen_idx]
                    break
        for i in range(idx[0]):
            for gen_idx in range(N):
                if gene[gen_idx] not in child:
                    child[i] = gene[gen_idx]
                    break

    return child1, child2


def ordered_crossing_population(parents: np.ndarray, crossing_probability: float) -> np.ndarray:
    parents_dim = parents.shape[0]
    survivors = None
    odd = parents_dim % 2

    if odd:
        survivors = parents[0]
    else:
        survivors = np.vstack(ordered_crossing_individual(parents[0], parents[1]))

    for i in range(2 - odd, parents_dim, 2):
        if np.random.rand() <= crossing_probability:
            child1, child2 = ordered_crossing_individual(parents[i], parents[i + 1])
            survivors = np.vstack((survivors, child1, child2))
        else:
            survivors = np.vstack((survivors, parents[i], parents[i + 1]))

    return survivors
