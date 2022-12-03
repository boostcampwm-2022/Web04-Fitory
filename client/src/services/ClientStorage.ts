import Exception from "./Exception";

class ClientStorage<T> {
  private key;

  private storage;

  private onException;

  constructor(key: string, storage: Storage, onException: () => void) {
    this.key = key;
    this.storage = storage;
    this.onException = onException;
  }

  has(): boolean {
    return Boolean(this.storage.getItem(this.key));
  }

  get(): T {
    const data = this.storage.getItem(this.key);
    if (data === null) {
      this.onException();
    }
    return JSON.parse(data as string);
  }

  set(data: T) {
    this.storage.setItem(this.key, JSON.stringify(data));
  }

  remove() {
    this.storage.removeItem(this.key);
  }
}

const authStorage = new ClientStorage<number>("fitory_auth", localStorage, Exception.UserNotFound);

export { authStorage };
