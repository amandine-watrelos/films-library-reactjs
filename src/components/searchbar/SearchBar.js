import PropTypes from 'prop-types';

const SearchBar = ({searchKeyword, updateSearchKeyword}) => {

    SearchBar.defaultProps = {
        searchKeyword : PropTypes.string.isRequired,
        updateSearchKeyword : PropTypes.func.isRequired
    }

    return (
        <form className="form form-inline col-md-3" style={{margin : '2vh auto 0 auto'}}>
            <label htmlFor="filmInput" style={{marginRight:'1vw'}}>Rechercher un film</label>
            <div className="form-group">
                <input value={searchKeyword} onChange={updateSearchKeyword} className="form-control" id="filmInput" type="text" aria-label="Search"/>
            </div>
        </form>
    );
}

export default SearchBar;
