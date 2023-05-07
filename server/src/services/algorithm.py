class AlgorithmService:
    async def test(self) -> int:
        k = [i for i in range(10_000_000)][-1]
        return k
