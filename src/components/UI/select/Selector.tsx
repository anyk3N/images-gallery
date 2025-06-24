interface SelectorProps {
    options: {
        value: string,
        name: string,
    }[];
    defaultValue: string;
    onSortChange: (value: string) => void;

}

const Selector = ({options, defaultValue, onSortChange}: SelectorProps) => {
    return (

        
        // <div className="sort-container">
        //     <span className="sort-label">Sort by</span>
        //     <div className="sort-dropdown">
        //         <button className="sort-button">Relevant</button>
        //         <div className="sort-options">
        //             <div className="sort-option" data-value="relevant">Relevant</div>
        //             <div className="sort-option" data-value="latest">Latest</div>
        //         </div>
        //     </div>
        // </div>

        <div className="sort-container">
            <span className="sort-label">Sort by</span>
            <div className="sort-dropdown">
            <select
                className="sort-select"
                defaultValue=""
                onChange={(e) => {
                    onSortChange(e.target.value)
                }}
            >
                <option disabled value="">{defaultValue}</option>
                {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
                )}
            </select>
            </div>
        </div>


        // <select>
        //     <option disabled value="">{defaultValue}</option>
        //     {options.map(option => 
        //         <option value ={option.value}>
        //             {option.name}
        //         </option>
        //     )}
        // </select>
      );
}
 
export default Selector;