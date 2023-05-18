from pydantic import Field
from src.schemas.base_schema import BaseSchema


class AlgorithmRequest(BaseSchema):
    N: int = Field(8, ge=4)
    population_dim: int = Field(100, ge=2)
    tournament_size: int = Field(5, ge=1)
    crossing_probability: float = Field(0.85, ge=0, le=1)
    mutation_probability: float = Field(0.15, ge=0, le=1)
    exchange_num: int = Field(3, ge=1)
    steps: int = Field(100, ge=1)
