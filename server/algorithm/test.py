import sys
import os
from pathlib import Path

if (dir := str(Path(os.getcwd()))) not in sys.path:
    sys.path.insert(0, dir)

import numpy as np

a = np.array([
    [0, 1, 2, 4, 3, 5],
    [1, 3, 5, 4, 2, 0],
    [2, 5, 1, 0, 3, 4],
    [1, 2, 0, 5, 4, 3],
    [0, 5, 2, 3, 4, 1],
])

from algorithm.evolution import evolution

res = evolution(8, 100, 5, 0.9, 0.15, 2, steps=150)

print(res)
