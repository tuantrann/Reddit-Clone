## Summary
A project that I am currently working on, it has a Reddit-like interface where users can post statuses that anyone that sign in can comment and vote on. I am currenly working on developing a real-time chat system for it. I also host it **at https://codeswonder.com/.**

## Getting Started

I made this project to learn more about the GraphQL setup and also TypeORM. It has a separated front end and back end that is first rendered server side with NextJS and then it will rendered for the most part on the client side.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* yarn
  ```sh
  npm install yarn
  ```
* NodeJS at [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Docker https://docs.docker.com/docker-for-windows/install/
* Redis https://redis.io/download
* PostgreSQL https://www.postgresql.org/docs/13/tutorial-install.html

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tuantrann/A-Small-Shop.git
   ```
2. Install yarn packages
   ```sh
   npm install
   yarn install
   ```
3. Set up PostgreSQL and Redis connection. 
4. Enter your key in `.env`
   ```.env
   DATABASE_URL=
    REDIS_URL=
    PORT=
    SESSION_SECRET=
    CORS_ORIGIN=
   ```
5. Go to your server folder and do
  ```
  yarn watch
  yarn dev
  ```
  Then go to your web folder and do
  ```
  yarn dev
  ```



<!-- USAGE EXAMPLES -->
## Live
Live **at https://codeswonder.com/.** 



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Tuan Tran - [https://www.linkedin.com/in/tuan-tran26/](https://www.linkedin.com/in/tuan-tran26/) - tmtran38@uh.edu

Project Link: [https://github.com/tuantrann/Reddit-Clone](https://github.com/tuantrann/Reddit-Clone)

