import numpy as np
from algorithm.fitness import fitness
from algorithm.create import create_population
from algorithm.natural_selection.tournament_selection import tournament_selection
from algorithm.crossing.ordered_crossing import ordered_crossing_population
from algorithm.mutation.exchange_mutation import exchange_mutation_population


def evolution(N: int, population_dim: int, tournament_size: int, crossing_probability: float, mutation_probability: float, exchange_num: int, steps: int) -> dict:
    population = create_population(N, population_dim)
    cache = []
    step = 0

    while (step := step + 1) <= steps:
        best_fitness = float('inf')
        best_individual = None

        for individual in population:
            cur_fitness = fitness(individual)

            if cur_fitness < best_fitness:
                best_fitness = cur_fitness
                best_individual = individual

            if cur_fitness == 0:
                cache.append((best_individual, best_fitness))
                return {'arrangement': individual, 'fitness': 0, 'cache': cache}

        cache.append((best_individual, best_fitness))

        parents = tournament_selection(population, tournament_size)
        survivors = ordered_crossing_population(parents, crossing_probability)
        population = exchange_mutation_population(survivors, mutation_probability, exchange_num)

    population_fitness = np.apply_along_axis(fitness, axis=1, arr=population)
    best_idx = np.argmin(population_fitness)

    return {
        'arrangement': population[best_idx],
        'fitness': population_fitness[best_idx],
        'cache': cache,
    }
