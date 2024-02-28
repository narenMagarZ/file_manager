interface FormButtonProps {
    label:string
}

export function FormButton(props:FormButtonProps){
    return (
        <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                {props.label}
            </button>
        </div>
    )
}