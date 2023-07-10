// eslint-disable-next-line react/prop-types
export function TextInput({ labelText, inputProps}) {
    return (
        <div>
            <label htmlFor="name">{labelText}:</label>
            <input type="text" {...inputProps} />
        </div>
    )
}