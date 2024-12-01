const apiUrl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export async function fetchBooks() {
  try {
    const response = await fetch(`${apiUrl}/books`, {
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    if (response.ok) {
      console.log(result.books);
      return result.books;
    }
  } catch (error) {
    console.log("trouble fetching books");
  }
}

export async function AddUser(user) {
  try {
    const response = await fetch(`${apiUrl}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    if (response.ok) {
      console.log(result);
      return result;
    }
  } catch (error) {
    console.log("error");
  }
}

export async function LoginFetch(info) {
  try {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    if (response.ok) {
      const result = await response.json();
      console.log(result);
      return result;
    }
  } catch (error) {
    console.log("error");
    return error;
  }
}

export async function fetchBookById(id) {
  try {
    const response = await fetch(`${apiUrl}/books/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    const result = await response.json();
    if (response.ok) {
      console.log(result);
      return result;
    }
  } catch (error) {
    console.log(`trouble fetching book ${id} `);
  }
}
