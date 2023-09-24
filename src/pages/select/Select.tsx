type selectType = {
    value: number,
    onChange: any,
    options: any,
}

export const Select = (props: selectType) => {
  const { value, onChange, options } = props;
    return (
        <select
            value={value}
            onChange={event => { onChange(parseInt(event.target.value)) }}
        >
            
        {options.map((option: any )=>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};