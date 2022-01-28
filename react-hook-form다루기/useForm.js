import React from "react";
import {useForm } from "react-hook-form";

export default function App() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <select {...register("gender")}>
                <option value="matiz">마티즈</option>
                <option value="Haski">허스키</option>
                <option value="mutt">똥개</option>
            </select>
            <input type = "submit"/>
        </form>
    )


}