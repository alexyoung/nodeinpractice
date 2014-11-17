To run this example, you can type `npm start`, and then trigger it with `curl`:

        curl -H "Content-Type: application/json" \
          -X POST -d '{ "name": "Kermit", "email": "kermit@example.com" }' \
            http://localhost:3000/users

The emails will be saved to `tmp/`.
