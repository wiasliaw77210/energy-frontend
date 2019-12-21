const host: string = process.env.MAIN_HOST;

export async function fetchLogin(account: string, password: string) {
  try {
    const resp = await fetch(`${host}/login`, {
      method: 'POST',
      body: JSON.stringify({ account, password }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    return resp.json();
  } catch (err) {
    return err;
  }
}
