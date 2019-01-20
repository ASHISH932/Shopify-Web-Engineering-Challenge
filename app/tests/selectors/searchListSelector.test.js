import searchListSelector from '../../selectors/searchListSelector';
import wastes from '../fixtures/waste';

test('should sort item into favourite or not', () => {
    const w = searchListSelector(wastes, [wastes[1],wastes[2]]);
    expect(w).toEqual([{ ...wastes[0], favourite: false}, {...wastes[1], favourite: true}, {...wastes[2], favourite:true}, {...wastes[3], favourite:false}])
});

test('should return empty array if searchList and favourite are not provided', () => {
    const w = searchListSelector();
    expect(w).toEqual([]);
});

test('should return same array back if favourite is not provided', () => {
    const w = searchListSelector(wastes);
    expect(w).toEqual(wastes);
});