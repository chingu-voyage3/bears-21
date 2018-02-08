# Chingu Voyage 3 - Team Bears #21 - Hissues

## Elevator Pitch
A student accomodation issue tracker.

## Project Justification
There seems to be a real gap for applications when tenants are communicating with the landlords/agencies. Last time
I did this, it was through email. This is very slow and hard to keep track of. Having a dashboard to track the current issues
would be super useful. Moreover seeing how landlords and agencies handled previous tenants would be useful to see, and might
determine if you chose to rent the property.

## Project Scope
Creating a housing platform for current students. This project will be completed by mid January, as given by the Chingu hosts.
It will include a platform for future tenants to see available houses, with the ratings of the landlord and agency. Communication
between user and landlord/agency such that they can book a house viewing. A dashboard such that the current tenants can report
any issues with the house and see the status of the repair/discussion of the problem. Finally a tracking dashboard to see when
future payments such like deposits and rent need to be made by.

## Project Success
- Is our application being used?
- Did we learn lots?
- Did we work well as a team?
- How did it compare to expectations?
- Did we meet the deadlines?

## Initial Ideas
- Can see list of available houses/rooms in your local/specified area.
- Can send a message/arrange a house/room viewing directly.
- Rate houses/landlords/agencies through application, after having lived in their accomodation.
- Track issues within the house. For example if something in particular breaks while living there can open a ticket.
- Can track when the payments/deposits need to be made by.
- Authorised/Authenticated Users.
- User permissions: Student (or Tenant)/Landlord/Agency


### v2 and later
- Open it up to not only students. But also people looking for housing.

## Project Deliverables
- Act 1 (9th December 2017) -> Project initial idea, wireframes, Project Manager/roles assigned. (COMPLETED)
- Act 2 - Code Sprints - 6-10 day sprints until mid January. (IN PROGRESS)
- Act 3 - Project completion and reflection - 20th January. (IN PROGRESS)

### Local development

1. create a .env file according to our .env.example file
2. start up local/remote mongodb server
3. run `npm install` in the `root` directory and in the `frontend` directory
4. Change back into the root folder and run our ecosystem using `npm run develop`

#### lint

```
$ npm run lint
```

#### lint watch mode

```
$ npm run lint:watch
```

### Stack
We used a completed JavaScript ecosystem for the development of our fullstack application, more often referred to the MERN stack.
- MongoDB - As our go to database
- ExpressJS - Handling our backend routing
- ReactJS with React Router & React Redux -Handling all of our frontend routing and UI
- NodeJS - Backend logic and authentication


### Authors
- [Leon Boehmer - Project Manager](https://github.com/mortuie)
- [Vivek Poddar - Fullstack Developer](https://github.com/vivekimsit)
- [nik - Fullstack Developer](https://github.com/nikrb)