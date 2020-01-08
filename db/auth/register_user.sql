insert into member (
    email,
    password,
    username
) values (
    ${email},
    ${password},
    ${email}
)
returning email, username;