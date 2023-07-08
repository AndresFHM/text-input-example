export function TextInput({ labelText, onChange, value }) {
    return (
        <div>
            <label htmlFor="name">{labelText}:</label>
            <input
                type="text"
                placeholder=""
                onChange={onChange}
            value={value}
            />
        </div>
    )
}