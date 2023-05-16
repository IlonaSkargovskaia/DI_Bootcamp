#Consider this list

# french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
# Look at this result :
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
# You have to recreate the result using a translator module.

from translate import Translator

translate_list = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
translator= Translator(to_lang="en", from_lang="fr")
result = {}
for item in translate_list:
    result[item] = translator.translate(item)


print(result)

