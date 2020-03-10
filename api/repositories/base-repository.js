export default class BaseRepository {

    /**
     * Prunes all properties where value is null, undefined, or an empty string.
     * 
     * @param {object} data Data object to prune
     * 
     * @returns {object} Pruned object
     */
    _pruneEmptyProperties(data) {
        const emptyProperties = [];
        for (let property in data) {
            if (!data[property] || data[property].length === 0) {
                emptyProperties.push(property);
            } else if (typeof data[property] === 'object') {
                data[property] = this._pruneEmptyProperties(data[property]);
            }
        }
        for (let index = 0; index < emptyProperties.length; index++) {
            delete data[emptyProperties[index]];
        }
        return data;
    }
}