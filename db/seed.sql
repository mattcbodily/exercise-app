create table if not exists member (
    member_id serial primary key,
    email varchar(150),
    password varchar(250),
    username varchar(20)
);