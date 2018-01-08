# Define your compute function here.
# run python -m unittest test.hamming_test to ensure the
# unit tests pass and your code meets all of the conditions.
#


def compute(first, second):
    """
    Function for calculating the hamming distance between
    two nucleotide sequences, 'first' and 'second'
    """
    if len(first) != len(second):
        raise ValueError
    return sum(char1 != char2 for char1, char2 in zip(first, second))
