class ClientStorage {
  private key;

  private storage;

  constructor(key: string, storage: Storage) {
    this.key = key;
    this.storage = storage;
  }

  get(): unknown | null {
    const data = this.storage.getItem(this.key);
    return data ? JSON.parse(data) : null;
  }

  set(data: unknown) {
    this.storage.setItem(this.key, JSON.stringify(data));
  }

  remove() {
    this.storage.removeItem(this.key);
  }
}

const authStorage = new ClientStorage("fitory_auth", localStorage);

export { authStorage };
