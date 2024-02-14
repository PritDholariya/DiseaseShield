import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier

def predict_heart_attack(input_data):
    # Load the CSV data into a Pandas DataFrame
    heart_data = pd.read_csv('E:\sem6\SDP\DiseaseShield\predict\ml_models\heart_disease_data.csv')

    # Statistical measures about the data
    print("\nStatistical measures about the data:")
    print(heart_data.describe())

    # # Checking the distribution of the Target Variable
    # print("\nDistribution of Target Variable:")
    # print(heart_data['target'].value_counts())

    # Splitting the Features and Target
    X = heart_data.drop(columns='target', axis=1)
    Y = heart_data['target']

    # Splitting the Data into Training data & Test Data
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

    # Model Training - Logistic Regression
    model = LogisticRegression(max_iter=1000)
    model.fit(X_train, Y_train)

    # Model Evaluation - Accuracy Score
    training_data_accuracy = accuracy_score(model.predict(X_train), Y_train)
    test_data_accuracy = accuracy_score(model.predict(X_test), Y_test)

    print('\nAccuracy on Training data:', training_data_accuracy)
    print('Accuracy on Test data:', test_data_accuracy)

    # Building a Predictive System
    input_data_values = [float(input_data[key]) for key in input_data]
    input_data_reshaped = np.array(input_data_values).reshape(1, -1)

    prediction = model.predict(input_data_reshaped)
    print('\nPrediction:', prediction)

    if prediction[0] == 0:
        return 'The Person does not have a Heart Disease'
    else:
        return 'The Person has Heart Disease'


def predict_from_symptoms(syptoms):
    data = pd.read_csv('E:\sem6\SDP\DiseaseShield\predict\ml_models\Training.csv')

    # Extract features (X) and target variable (y)
    X = data.drop(['prognosis'], axis=1)  # Features
    y = data['prognosis']  # Target variable


    # Encode the target variable
    le = LabelEncoder()
    y = le.fit_transform(y)


    # Create a DecisionTreeClassifier model
    model = RandomForestClassifier(n_estimators=100, random_state=42)


    # Train the model
    model.fit(X, y)


    # Get user input for symptoms
    user_symptoms = syptoms   # Replace with actual symptoms


    # Create a DataFrame with all symptoms set to 0
    user_data = pd.DataFrame(0, index=range(len(user_symptoms)), columns=X.columns)


    # Set the values for the provided symptoms to 1
    user_data.loc[0, user_symptoms] = 1


    # Predict the disease based on user input
    predicted_disease = le.inverse_transform(model.predict(user_data))


    # Print the predicted disease
    print("Predicted Disease:", predicted_disease)

    return predicted_disease