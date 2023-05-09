import numpy as np
from algorithm.fitness import fitness


def tournament_selection(population: np.ndarray, tournament_size: int) -> np.ndarray:
    return np.vstack(
        population[
            np.argmin(np.apply_along_axis(
                fitness,
                axis=1,
                arr=np.random.default_rng().choice(population, axis=0, size=tournament_size)
            ))
        ]
        for _ in range(population.shape[0])
    )
