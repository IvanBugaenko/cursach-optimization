from src.schemas.algorithm.algorithm_request import AlgorithmRequest
from algorithm.evolution import evolution


class AlgorithmService:
    async def evolution(self, request: AlgorithmRequest):
        return evolution(**dict(request))
