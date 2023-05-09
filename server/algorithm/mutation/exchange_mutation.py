import numpy as np


def exchange_mutation_individual(individual: np.ndarray, mutation_probability: float, exchange_num: int) -> np.ndarray:
    if np.random.rand() <= mutation_probability:
        for _ in range(exchange_num):
            idx = np.random.choice(np.arange(individual.shape[0]), replace=False, size=2)
            individual[idx[0]], individual[idx[1]] = individual[idx[1]], individual[idx[0]]

    return individual


def exchange_mutation_population(population: np.ndarray, mutation_probability: float, exchange_num: int) -> np.ndarray:
    return np.apply_along_axis(
        exchange_mutation_individual,
        axis=1,
        arr=population,
        mutation_probability=mutation_probability,
        exchange_num=exchange_num
    )
