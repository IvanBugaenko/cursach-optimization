import numpy as np
from typing import List, Tuple
from pydantic_numpy import NDArray
from src.schemas.base_schema import BaseSchema


class AlgorithmResponse(BaseSchema):
    arrangement: NDArray
    fitness: int
    cache: List[Tuple[NDArray, int]]

    def __init__(self, **data):
        super().__init__(**data)

        if isinstance(self.arrangement, np.ndarray):
            self.arrangement = self.arrangement.tolist()

        for i, (arr, val) in enumerate(self.cache):
            if isinstance(arr, np.ndarray):
                self.cache[i] = (arr.tolist(), val)
