insert into workout (
    member_id,
    workout_type,
    workout_time,
    workout_distance,
    workout_date
) values (
    ${id},
    ${workoutType},
    ${workoutTime},
    ${workoutDistance},
    ${workoutDate}
);