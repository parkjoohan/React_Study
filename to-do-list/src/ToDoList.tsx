import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//     const [toDo, setToDo] = useState("");
//     const [toDoError, setToDoError] = useState("");
//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: { value }
//         } = event;
//         setToDoError("");
//         setToDo(value);
//     };
//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (toDo.length < 10) {
//             return setToDoError("To do should be longer");
//         }
//         console.log("submit");
//     }
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//                 <button>Add</button>
//                 {toDoError !== "" ? toDoError: null}
//             </form>
//         </div>
//     )
// }

interface IFrom {
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    password1: string,
    extraError?: string,
}

function ToDoList() {
    const { register, handleSubmit, formState:{errors}, setError } = useForm<IFrom>({defaultValues: {email: "@naver.com",}});
    const onValid = (data: IFrom) => {
        if (data.password !== data.password1) {
            setError("password1", { message: "Password are not the same"}, {shouldFocus: true});
        }
        //setError("extraError", { message: "Server offline." });
    }
    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
            >
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                            message: "Only naver.com emails allowed"
                        }
                    })}
                    placeholder="Email"
                />
                <span>{errors?.email?.message as string}</span>
                <input
                    {...register("firstName", {
                        required: "firstName is required",
                        validate: {
                            noNice: (value) =>
                                value.includes("nico") ? "no nico allowed" : true,
                            noNick: (value) =>
                                value.includes("nick") ? "no nick allowed" : true,
                        },
                    })}
                    placeholder="First Name"
                />
                <span>{errors?.firstName?.message as string}</span>
                <input
                    {...register("lastName", {
                        required: "lastName is required"
                    })}
                    placeholder="Last Name"
                />
                <span>{errors?.lastName?.message as string}</span>
                <input
                    {...register("username", {
                        required: "username is required",
                        minLength: 10
                    })}
                    placeholder="Username"
                />
                <span>{errors?.username?.message as string}</span>
                <input
                    {...register("password", {
                        required: "password is required",
                        minLength: 10
                    })}
                    placeholder="Password"
                />
                <span>{errors?.password?.message as string}</span>
                <input
                    {...register("password1", {
                        required: "password1 is required",
                        minLength: {
                            value: 10,
                            message: "Your password is too short."
                        }
                    })}
                    placeholder="Password1"
                />
                <span>{errors?.password1?.message as string}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message as string}</span>
            </form>
        </div>
    )
}

export default ToDoList;