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
}

function ToDoList() {
    const { register, handleSubmit, formState:{errors} } = useForm<IFrom>({defaultValues: {email: "@naver.com",}});
    const onValid = (data: any) => {
        console.log(data);
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
                        required: "firstName is required"
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
            </form>
        </div>
    )
}

export default ToDoList;