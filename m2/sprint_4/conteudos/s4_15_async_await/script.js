async function getData() {
    const body = document.querySelector('body');
  
    try {
      const data = await fetch('https://api.github.com/users/DaviSouzaS');
      const dataJSON = await data.json();
  
      document.body.insertAdjacentHTML("beforeend", `
            <h1>${dataJSON.login}</h1>
            <img src="${dataJSON.avatar_url}" alt="${dataJSON.login}" />
        `);
  
      return data;
    } 

    catch {
      body.style.backgroundColor = 'red';
      console.log('Deu errado!');
    }

    finally {
        console.log('O código foi executado!');
    }
  }
  
  getData();