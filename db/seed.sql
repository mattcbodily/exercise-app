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

create table if not exists battle (
    battle_id serial primary key,
    battle_name varchar(20),
    battle_category varchar(30),
    battle_condition varchar(30)
);

create table if not exists member_battle_join (
    member_battle_join_id serial primary key,
    member_id int references member(member_id),
    battle_id int references battle(battle_id)
);