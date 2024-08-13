import React from 'react';
import SearchBoxStyle01 from "./SearchBoxStyle01";
import SearchBoxStyle02 from "./SearchBoxStyle02";
import SearchBoxStyle03 from "./SearchBoxStyle03";
import SearchBoxStyle04 from "./SearchBoxStyle04";
import SearchBoxStyle05 from "./SearchBoxStyle05";
import SearchBoxStyle06 from "./SearchBoxStyle06";
import SearchBoxStyle07 from "./SearchBoxStyle07";


const SearchBoxSelector = (props) => {
    const setSkin = () =>{
        const skinName = props.skinName;

        switch (skinName){
            case 'SearchBoxStyle01':
                return <SearchBoxStyle01 {...props}/>
            case 'SearchBoxStyle02':
                return <SearchBoxStyle02 {...props}/>
            case 'SearchBoxStyle03':
                return <SearchBoxStyle03 {...props}/>
            case 'SearchBoxStyle04':
                return <SearchBoxStyle04 {...props}/>
            case 'SearchBoxStyle05':
                return <SearchBoxStyle05 {...props}/>
            case 'SearchBoxStyle06':
                return <SearchBoxStyle06 {...props}/>
            case 'SearchBoxStyle07':
                return <SearchBoxStyle07 {...props}/>
        }
    }
    return (
        setSkin()
    );
};

export default React.memo(SearchBoxSelector);
