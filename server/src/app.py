import time
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from src.core.settings import settings
from src.api.base_router import base_router


tags = [
    {
      "name": "algorithm",
      "description": "Работа с алгоритмом"
    },
]

app = FastAPI(
    title='Серверная часть курсового проекта',
    description="""
      Тут описание 🐸
    """,
    version='0.1.0',
    openapi_tags=tags,
    docs_url=settings.docs_url,
    redoc_url=settings.redoc_url,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(base_router)


@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response
