from fastapi import APIRouter, Depends
from src.schemas.algorithm.algorithm_request import AlgorithmRequest
from src.schemas.algorithm.algorithm_response import AlgorithmResponse
from src.services.algorithm import AlgorithmService


router = APIRouter(
    prefix='/algorithm',
    tags=['algorithm'],
)


@router.post('/', response_model=AlgorithmResponse, name='Получить результат алгоритма')
async def evolution(request: AlgorithmRequest, service: AlgorithmService = Depends()):
    return await service.evolution(request)
