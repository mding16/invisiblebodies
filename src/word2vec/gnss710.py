# -*- coding: utf-8 -*-
"""gnss710.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1YmJyeDmniK0cMAX-Wp9X06tRhoiCvbFv
"""

from google.colab import drive
drive_dir = '/content/drive'
drive.mount(drive_dir, force_remount=True)

import pickle
local_colab_dir = '/MyDrive/Colab Notebooks/gnss710/gnss710.ipynb'
path = f"/content/drive/MyDrive/Colab Notebooks/gnss710/pretrained_word_vectors_from_wikipedia.pickle"
with open(path, 'rb') as f:
    vector_dict = pickle.load(f)

import numpy as np
word_list = []
vector_matrix = np.zeros(shape=(50000, 300))
for i, (word, vec) in enumerate(vector_dict.items()):
  word_list.append(word)
  vector_matrix[i] = vec

print('vector_matrix of shape', vector_matrix.shape, ':\n', vector_matrix)
print('\nword_list of length',  len(word_list),      ':\n', word_list[:12])

from sklearn.metrics.pairwise import linear_kernel

def find_similar(vector_matrix, input_vector, num_examples=10):
    """
    Use a basic similarity calculation (cosine similarity) to find
    the closest words to an input vector.
    """
    cosine_similarities = linear_kernel(input_vector, vector_matrix).flatten()
    cosine_similarities /= np.linalg.norm(vector_matrix, axis=1)
    related_words_indices = [i for i in cosine_similarities.argsort()[::-1]]
    return [index for index in related_words_indices][:num_examples]

def get_gendered_analogies(word, num_examples=10, vector_dict=vector_dict):
    """
    Use find_similar() to manually observe how gendered biases are encoded
    into the embedding.
    """
    assert word in word_list, f'"{word}" not in observed vocabulary'

    print(f'He is to she as "{word}" is to: ')

    x = vector_dict["she"] - vector_dict["he"] + vector_dict[word]
    x = np.reshape(x, (1, 300))

    gender_shifted = find_similar(vector_matrix, x, num_examples)
    gendered_words = [str(word_list[i]) for i in gender_shifted]
    return gendered_words

# ================================================================
# ================================================================
get_gendered_analogies("programmer") # TRY DIFFERENT WORDS
# ================================================================
# ================================================================

words = ["programmer", "boxer", "doctor", "politician", "coach", "football", "lawyer", "warrior"]

import json
result_dict = {}
for w in words:
  result_dict[w] = get_gendered_analogies(w)

print(result_dict)
json_path = f"/content/drive/MyDrive/Colab Notebooks/gnss710/results.json"
with open(json_path, 'w') as f:
    json.dump(result_dict, f, indent=4)