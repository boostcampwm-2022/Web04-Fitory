class ClientStorage<T> {
  private key;

  private storage;

  constructor(key: string, storage: Storage) {
    this.key = key;
    this.storage = storage;
  }

  get(): T | null {
    const data = this.storage.getItem(this.key);
    return data ? JSON.parse(data) : null;
  }

  set(data: T) {
    this.storage.setItem(this.key, JSON.stringify(data));
  }

  remove() {
    this.storage.removeItem(this.key);
  }
}

const authStorage = new ClientStorage<number>("fitory_auth", localStorage);

export { authStorage };
