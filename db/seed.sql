create table if not exists member (
    member_id serial primary key,
    email varchar(150),
    password varchar(250),
    username varchar(150)
);

create table if not exists workout (
    workout_id serial primary key,
    member_id int references member(member_id),
    workout_type varchar(50),
    workout_time smallint,
    workout_distance decimal,
    workout_date varchar(30)
);