import numpy as np


def create_individual(N: int) -> np.ndarray:
    individual = np.arange(N)
    np.random.shuffle(individual)

    return individual


def create_population(N: int, population_dim: int) -> np.ndarray:
    return np.vstack(create_individual(N) for _ in range(population_dim))
