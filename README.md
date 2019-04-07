<img src="https://github.com/mochiling-es/website/blob/master/static/assets/favicon/favicon-96x96.png" alt="Mochiling" title="Mochiling" width=60/>

# Mochiling

A website for showing all experiences done by our members. Done with [Next.js](https://nextjs.org/) and deployed thanks to [now.sh](https://now.sh).

---

## Features

- New website created with React framework.
- Create/edit/remove members or experiences in the proper website.
- Real time changes in the members or experiences offers.
- Internationalized.
- Images for data stored in Google Storage.

---

## Pending

- [x] Localization
- [x] Read and write data from database
- [x] Migrate common components (Header, Footer, LastExperiences,...)
- [x] Migrate team page
- [x] Migrate member page
- [x] Create login/admin page
- [x] Create member edition/creation page
- [x] Enable CI (deploy to staging & production)
- [x] Migrate experience page
- [x] Create experience edition/creation page
- [x] Migrate 404 page
- [x] Migrate experiences page
- [x] Possibility to delete experience
- [x] Change static map to a Leaflet one
- [x] Migrate proposals page
- [x] Migrate home
- [x] Fix SEO problem
- [x] Home slider
- [x] Add Analytics
- [x] Migrate domain
- [ ] Fix member born location
- [ ] Home video
- [ ] Add terms&conditions banner
- [ ] Create a better terms-of-user page
- [ ] Add Map hash



---

## Environments

### Development

Taking for granted you have installed [node](http://nodejs.org) and you are using one of the latest versions.

```bash
> yarn
> yarn dev
```

### Staging
If you want to test your changes in a staging server, you will need to:

- Create a pull request.
- And then automatically `now.sh` will deploy those changes to an inmutable URL.
- Tachan!

### Production

Any branch merged into `master` will be deployed thanks to `now.sh`. Results will be visible at [mochiling.es](https://mochiling.es).

---

## Database (*)

We only use a "database" for storing members or experiences. It has been created with Firestore (a Firebase product, bought by Google) and it is located [here](https://console.firebase.google.com/u/0/project/mochiling-production/database), if you need any access, talk with [xavijam](mailto:xavijam@gmail.com).


---

## Credits

- [Blog done with Next.js and Firestore](https://github.com/suevalov/next-blog-firestore)

---

## Guide

- [Example Next.js + Express](https://github.com/parweb/starter-website)
- [Deploy Next.js + Express App](https://zeit.co/havoc/nextjs-express-nowv2/pzb1c5nve/source?f=src/now.json&host=nextjs-express-nowv2-pzb1c5nve.now.sh) 
