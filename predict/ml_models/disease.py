import numpy as np
import pandas as pd
from sklearn.calibration import CalibratedClassifierCV
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn import svm
import joblib
# import pickle
import os
import joblib

# path = "C:\Users\pritd\OneDrive\Desktop\Machine_Learning\DiseaseShield\predict\ml_models"
def load_or_train_model_heart():
    model_file = 'E:\sem6\SDP\DiseaseShield\predict\ml_models\heart_disease_model.joblib'
    scaler_file = 'E:\sem6\SDP\DiseaseShield\predict\ml_models\heart_disease_scaler.joblib'
    
    # model_file = 'C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/heart_disease_model.joblib'
    # scaler_file = 'C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/heart_disease_scaler.joblib'

    # If model file exists, load and return the model
    if os.path.exists(model_file) and os.path.exists(scaler_file):
        print("Loading pre-trained diabetes model and scaler...")
        model = joblib.load(model_file)
        scaler = joblib.load(scaler_file)
        return model, scaler
    
    # If model file doesn't exist, perform training and testing
    print("Training the model...")
    # Load the CSV data into a Pandas DataFrame
    heart_data = pd.read_csv('E:\sem6\SDP\DiseaseShield\predict\ml_models\heart_disease_data.csv')

    # Splitting the Features and Target
    X = heart_data.drop(columns='target', axis=1)
    Y = heart_data['target']

    scaler = StandardScaler()
    scaler.fit(X)
    standardize_data = scaler.transform(X)
    X = standardize_data
    Y = heart_data['target']
    # Splitting the Data into Training data & Test Data
    # X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

    # Model Training - Logistic Regression
    # model = LogisticRegression(max_iter=1000)
    classifier = svm.SVC(kernel='linear' , probability=True)
    calibrated_classifier = CalibratedClassifierCV(classifier)
    calibrated_classifier.fit(X, Y)

    # Save the model
    print("Saving the trained model...")
    joblib.dump(calibrated_classifier, model_file)
    joblib.dump(scaler, scaler_file)

    return calibrated_classifier, scaler


def predict_heart_attack(input_data):
    # Load or train the model
    model, scaler= load_or_train_model_heart()

    # Building a Predictive System
    input_data_values = [float(input_data[key]) for key in input_data]
    input_data_reshaped = np.array(input_data_values).reshape(1, -1)
    std_data = scaler.transform(input_data_reshaped)

    prediction = model.predict(std_data)
    probability = model.predict_proba(std_data)

    print('\nPrediction:', prediction)
    print(probability)
    if prediction[0] == 0:
        return 'The Person does not have a Heart Disease', probability[0][0]
    else:
        return 'The Person has Heart Disease', probability[0][1]



def load_or_train_diabetes_model():
    model_file = 'E:\sem6\SDP\DiseaseShield\predict\ml_models\diabetes_model.joblib'
    scaler_file = 'E:\sem6\SDP\DiseaseShield\predict\ml_models\diabetes_scaler.joblib'
    
    # If model file exists, load and return the model
    if os.path.exists(model_file) and os.path.exists(scaler_file):
        print("Loading pre-trained diabetes model and scaler...")
        model = joblib.load(model_file)
        scaler = joblib.load(scaler_file)
        return model, scaler
    
    # If model file doesn't exist, perform training and testing
    print("Training the diabetes model...")
    # Load the diabetes dataset into a Pandas DataFrame
    diabetes_dataset = pd.read_csv('E:\sem6\SDP\DiseaseShield\predict\ml_models\diabetes.csv')

    # separating the data and labels
    X = diabetes_dataset.drop(columns='Outcome', axis=1)
    Y = diabetes_dataset['Outcome']

    scaler = StandardScaler()
    scaler.fit(X)
    standardize_data = scaler.transform(X)

    X = standardize_data
    Y = diabetes_dataset['Outcome']
    classifier = svm.SVC(kernel='linear' , probability=True)
    calibrated_classifier = CalibratedClassifierCV(classifier)
    calibrated_classifier.fit(X, Y)
    # Save the trained model and scaler
    print("Saving the trained diabetes model and scaler...")
    joblib.dump(calibrated_classifier, model_file)
    joblib.dump(scaler, scaler_file)
    
    return calibrated_classifier, scaler


def predict_diabetes(input_data):
    # Load or train the diabetes model and scaler
    model, scaler = load_or_train_diabetes_model()

    # Reshape the input data
    input_data_as_numpy_array = np.asarray(input_data)
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

    # Standardize the input data using the loaded scaler
    std_data = scaler.transform(input_data_reshaped)

    # Make predictions
    prediction = model.predict(std_data)
    probability = model.predict_proba(std_data)
    print(probability)
    print(prediction[0])

    if prediction[0] == 0:
        return 'The Person is not diabetic', probability[0][0]  # Probability of not being diabetic
    else:
        return 'The Person is diabetic', probability[0][1]  # Probability of being diabetic

def load_or_train_model_parkinson():
    model_file = 'E:\sem6\SDP\DiseaseShield\predict\ml_models\parkinson_model.joblib'
    scaler_file = 'E:\sem6\SDP\DiseaseShield\predict\ml_models\parkinson_scaler.joblib'
    
    # If both model and scaler files exist, load and return them
    if os.path.exists(model_file) and os.path.exists(scaler_file):
        print("Loading pre-trained model and scaler for Parkinson's disease prediction...")
        model = joblib.load(model_file)
        scaler = joblib.load(scaler_file)
        return model, scaler
    
    # If either model or scaler file doesn't exist, perform training and save the model and scaler
    print("Training the model for Parkinson's disease prediction...")
    
    # Load the data from CSV file into a Pandas DataFrame
    parkinsons_data = pd.read_csv('E:\sem6\SDP\DiseaseShield\predict\ml_models\parkinsons.csv')

    # Extract features and target variable
    X = parkinsons_data.drop(columns=['name', 'status'], axis=1)
    Y = parkinsons_data['status']

    # Standardize the features
    scaler = StandardScaler()
    scaler.fit(X)
    X_scaled = scaler.transform(X)

    classifier = svm.SVC(kernel='linear' , probability=True)
    calibrated_classifier = CalibratedClassifierCV(classifier)
    calibrated_classifier.fit(X_scaled, Y)
    # Train the SVM model
    # model.fit(X_scaled, Y)

    # Save the model and scaler
    print("Saving the trained model and scaler for Parkinson's disease prediction...")
    joblib.dump(calibrated_classifier, model_file)
    joblib.dump(scaler, scaler_file)
    
    return calibrated_classifier, scaler

def predict_parkinson(input_data):
    # Load or train the model and scaler
    model, scaler = load_or_train_model_parkinson()

    # Standardize the input data using the loaded scaler
    input_data_scaled = scaler.transform([input_data])

    # Make prediction on input data
    prediction = model.predict(input_data_scaled)
    probability = model.predict_proba(input_data_scaled)

    print(prediction[0])
    if (prediction[0] == 0):
        return "The person does not have Parkinson's disease",probability[0][0]
    else:
        return "The person has Parkinson's disease", probability[0][1]
    
    
def predict_from_symptoms(syptoms):
    # data = pd.read_csv('E:/sem6/SDP/DiseaseShield/predict/ml_models/Training.csv')

    # # Extract features (X) and target variable (y)
    # X = data.drop(['prognosis'], axis=1)  # Features
    # y = data['prognosis']  # Target variable


    # # Encode the target variable
    # y = le.fit_transform(y)


    # # Create a DecisionTreeClassifier model
    # model = RandomForestClassifier(n_estimators=100, random_state=42)


    # # Train the model
    # model.fit(X, y)

    loaded_model = joblib.load('E:/sem6/SDP/DiseaseShield/predict/ml_models/symptoms_model.joblib')


    # Get user input for symptoms
    user_symptoms = syptoms   # Replace with actual symptoms


    # Create a DataFrame with all symptoms set to 0
    user_data = pd.DataFrame(0, index=[0], columns=loaded_model['X'].columns)


    # Set the values for the provided symptoms to 1
    user_data.loc[0, user_symptoms] = 1

    # Predict the disease based on user input
    # predicted_disease = loaded_model['model'].predict(user_data)

    # Get the predicted probabilities for all classes
    predicted_proba = loaded_model['model'].predict_proba(user_data)

    # Get the top 5 predicted diseases along with their probabilities
    top_3_indices = predicted_proba.argsort()[0][-3:][::-1]
    top_3_diseases = loaded_model['le'].inverse_transform(top_3_indices)
    top_3_probabilities = predicted_proba[0][top_3_indices]


    data = [{"disease": disease, "probability": probability} for disease, probability in zip(top_3_diseases, top_3_probabilities)]

    return data