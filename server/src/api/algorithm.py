from fastapi import APIRouter, Depends
from src.services.algorithm import AlgorithmService


router = APIRouter(
    prefix='/algorithm',
    tags=['algorithm'],
)


@router.post('/ping', name='Проверить токен')
async def ping(service: AlgorithmService = Depends()):
    print(await service.test())
    return {'pong': '🦜'}
