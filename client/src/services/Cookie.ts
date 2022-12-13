interface CookieOption {
  secure?: boolean;
  expires?: string | Date;
  "max-age"?: number;
}

class Cookie {
  private name;

  constructor(name: string) {
    this.name = name;
  }

  get() {
    const name = this.name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1");
    const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));

    if (!matches) {
      return undefined;
    }

    try {
      return JSON.parse(decodeURIComponent(matches[1]));
    } catch {
      return decodeURIComponent(matches[1]);
    }
  }

  set(value: unknown, options: CookieOption = {}) {
    const cookieOptions = {
      path: "/",
      ...options,
    };

    if (cookieOptions.expires instanceof Date) {
      cookieOptions.expires = cookieOptions.expires.toUTCString();
    }

    const cookieValue = typeof value === "string" ? value : JSON.stringify(value);
    let cookie = `${encodeURIComponent(this.name)}=${encodeURIComponent(cookieValue)}`;

    Object.entries(cookieOptions).forEach(([optionKey, optionValue]) => {
      cookie += `; ${optionKey}`;
      if (optionValue !== true) {
        cookie += `=${optionValue}`;
      }
    });

    document.cookie = cookie;
  }

  delete() {
    this.set("", { "max-age": -1 });
  }
}

const appInstallPromptCookie = new Cookie("isAppInstallPromptHide");

export { appInstallPromptCookie };
