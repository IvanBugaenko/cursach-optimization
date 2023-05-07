from fastapi import APIRouter
from fastapi.responses import HTMLResponse
from src.api import algorithm


base_router = APIRouter()
base_router.include_router(algorithm.router)


@base_router.get('/', response_class=HTMLResponse, name='Default page')
async def default():
    html_content = """
        <div>I'm working</div>
    """
    return HTMLResponse(content=html_content, status_code=200)
