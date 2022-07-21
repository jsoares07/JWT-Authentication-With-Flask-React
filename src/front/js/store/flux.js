const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      URLAPI:
        "https://3001-jsoares07-jwtauthentica-73831q1o31x.ws-eu54.gitpod.io/api/",
      userinfo: {},
    },
    actions: {
      logIn: async (user) => {
        const response = await fetch(getStore().URLAPI + "login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(user),
        });
        if (response.status == 200) {
          const data = await response.json();
          localStorage.setItem("token", data.token);
          localStorage.setItem("logIn", true);
          return true;
        } else {
          alert("Incorrect username or password");
          return false;
        }
      },
      // logIn:  (user) => {
      //     fetch(getStore().URLAPI + "login", {
      //         method: "POST",
      //         headers: {
      //             "Content-Type": "application/json",
      //             Accept: "application/json",
      //         },
      //         body: JSON.stringify(user),
      //     }).then(response => {
      //         console.log(response) //Nos indica si el fetch ha salido bien
      //         if (response.status == 200) {
      //             let data = response.json()
      //             data.token ? localStorage.setItem("token", data.token) : console.log("data no se ha rellenado");
      //             return true;
      //         } else {
      //             alert("Contraseña o usuario incorrectos");
      //             return false;
      //         }
      //     })

      // },
      signUp: async (user) => {
        const response = await fetch(getStore().URLAPI + "signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(user),
        });
        if (response.status == 201) {
          const data = await response.json();
          localStorage.setItem("token", data.token);

          return true;
        } else {
          alert("Registration failed");
          return false;
        }
      },
      logOut: () => {
        localStorage.removeItem("logIn");
        localStorage.removeItem("token");
      },
      getUserInfo: async () => {
        const response = await fetch(getStore().URLAPI + "infouser", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setStore({
          userinfo: data.results,
        });
      },
    },
  };
};

export default getState;
