class LocalSavePurchases {
    constructor(
        private readonly cacheStore: ICacheStore
    ) { }

    async save(): Promise<void> {
        this.cacheStore.delete();
    }
}

interface ICacheStore {
    delete: () => void
}

class CacheStoreSpy implements ICacheStore {
    deleteCallsCount = 0

    delete(): void {
        this.deleteCallsCount++;
    }
}

type SutTypes = {
    sut: LocalSavePurchases,
    cacheStore: CacheStoreSpy
}

const createSut = (): SutTypes => {
    const cacheStore = new CacheStoreSpy();
    const sut = new LocalSavePurchases(cacheStore);

    return {
        sut,
        cacheStore
    }
}

describe('LocalSavePurchases', () => {
    test('Should not delete cache on sut.init', () => {
        const { cacheStore } = createSut();

        expect(cacheStore.deleteCallsCount).toBe(0);
    });

    test("Should delete old cache on sut.save", async () => {
        const { cacheStore, sut } = createSut();

        await sut.save();

        expect(cacheStore.deleteCallsCount).toBe(1);
    });
});