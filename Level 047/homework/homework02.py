# მომხმარებლის ასაკის კატეგორიზაცია
#  შექმენი პროგრამა, რომელიც მიიღებს მომხმარებლის ასაკს და დააბრუნებს შეტყობინებას იმის მიხედვით, თუ რომელ ასაკობრივ კატეგორიაშია მომხმარებელი.

def age(x):
    if x < 10:
        return "child"
    elif x > 10 and x < 18:
        return "teenager"
    elif x > 18 and x < 50:
        return "adult"
    elif x > 50:
        return "🫡"
    elif x < 0:
        return "INVALID NUMBER"