import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn import svm
import joblib
import pickle
import os

# path = "C:\Users\pritd\OneDrive\Desktop\Machine_Learning\DiseaseShield\predict\ml_models"
def load_or_train_model_heart():
    model_file = 'C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/heart_disease_model.joblib'
    
    # If model file exists, load and return the model
    if os.path.exists(model_file):
        print("Loading pre-trained model...")
        return joblib.load(model_file)
    
    # If model file doesn't exist, perform training and testing
    print("Training the model...")
    # Load the CSV data into a Pandas DataFrame
    heart_data = pd.read_csv('C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/heart_disease_data.csv')

    # Splitting the Features and Target
    X = heart_data.drop(columns='target', axis=1)
    Y = heart_data['target']

    # Splitting the Data into Training data & Test Data
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

    # Model Training - Logistic Regression
    model = LogisticRegression(max_iter=1000)
    model.fit(X_train, Y_train)

    # Save the model
    print("Saving the trained model...")
    joblib.dump(model, model_file)
    
    return model


def predict_heart_attack(input_data):
    # Load or train the model
    model = load_or_train_model_heart()

    # Building a Predictive System
    input_data_values = [float(input_data[key]) for key in input_data]
    input_data_reshaped = np.array(input_data_values).reshape(1, -1)

    prediction = model.predict(input_data_reshaped)
    print('\nPrediction:', prediction)

    if prediction[0] == 0:
        return 'The Person does not have a Heart Disease'
    else:
        return 'The Person has Heart Disease'

# def predict_heart_attack(input_data):
#     # Load the CSV data into a Pandas DataFrame
#     heart_data = pd.read_csv('C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/heart_disease_data.csv')

#     # Statistical measures about the data
#     print("\nStatistical measures about the data:")
#     print(heart_data.describe())

#     # # Checking the distribution of the Target Variable
#     # print("\nDistribution of Target Variable:")
#     # print(heart_data['target'].value_counts())

#     # Splitting the Features and Target
#     X = heart_data.drop(columns='target', axis=1)
#     Y = heart_data['target']

#     # Splitting the Data into Training data & Test Data
#     X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

#     # Model Training - Logistic Regression
#     model = LogisticRegression(max_iter=1000)
#     model.fit(X_train, Y_train)

#     # Model Evaluation - Accuracy Score
#     training_data_accuracy = accuracy_score(model.predict(X_train), Y_train)
#     test_data_accuracy = accuracy_score(model.predict(X_test), Y_test)

#     print('\nAccuracy on Training data:', training_data_accuracy)
#     print('Accuracy on Test data:', test_data_accuracy)

#     # Building a Predictive System
#     input_data_values = [float(input_data[key]) for key in input_data]
#     input_data_reshaped = np.array(input_data_values).reshape(1, -1)

#     prediction = model.predict(input_data_reshaped)
#     print('\nPrediction:', prediction)

#     if prediction[0] == 0:
#         return 'The Person does not have a Heart Disease'
#     else:
#         return 'The Person has Heart Disease'


def predict_from_symptoms(syptoms):
    data = pd.read_csv('C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/Training.csv')

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


def load_or_train_diabetes_model():
    model_file = 'C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/diabetes_model.joblib'
    scaler_file = 'C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/diabetes_scaler.joblib'
    
    # If model file exists, load and return the model
    if os.path.exists(model_file) and os.path.exists(scaler_file):
        print("Loading pre-trained diabetes model and scaler...")
        model = joblib.load(model_file)
        scaler = joblib.load(scaler_file)
        return model, scaler
    
    # If model file doesn't exist, perform training and testing
    print("Training the diabetes model...")
    # Load the diabetes dataset into a Pandas DataFrame
    diabetes_dataset = pd.read_csv('C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/diabetes.csv')

    # separating the data and labels
    X = diabetes_dataset.drop(columns='Outcome', axis=1)
    Y = diabetes_dataset['Outcome']

    scaler = StandardScaler()
    scaler.fit(X)
    standardize_data = scaler.transform(X)

    X = standardize_data
    Y = diabetes_dataset['Outcome']
    classifier = svm.SVC(kernel='linear')
    classifier.fit(X, Y)

    # Save the trained model and scaler
    print("Saving the trained diabetes model and scaler...")
    joblib.dump(classifier, model_file)
    joblib.dump(scaler, scaler_file)
    
    return classifier, scaler


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
    print(prediction[0])
    if (prediction[0] == 0):
        return 'The Person is not diabetic'
    else:
        return 'The Person is diabetic'
# def predict_diabetes(input_data):
    #loading the diabets datasets to a pandas Dataframe
    diabetes_dataset = pd.read_csv('C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/diabetes.csv')


    #printing the first 5 rows of the datasets
    # diabetes_dataset.head()

    #seprating the data and labels
    X = diabetes_dataset.drop(columns = 'Outcome', axis = 1)
    Y = diabetes_dataset['Outcome']

    scaler = StandardScaler()

    scaler.fit(X)

    standardize_data = scaler.transform(X)

    X = standardize_data
    Y = diabetes_dataset['Outcome']
    # X_train, X_test, Y_train, Y_test = train_test_split(X, Y , test_size = 0.2,stratify = Y,random_state = 2)

    classifier = svm.SVC(kernel = 'linear')

    #training the support vector machine classifier
    # classifier.fit(X_train,Y_train)
    classifier.fit(X,Y)

    #accuracy score on the training data
    # X_train_prediction = classifier.predict(X_train)
    X_prediction = classifier.predict(X)

    training_data_accuracy = accuracy_score(X_prediction, Y)
    # print('Accuracy is', training_data_accuracy)

    #accuracy score on the training data
    # X_test_prediction = classifier.predict(X_test)
    # test_data_accuracy = accuracy_score(X_test_prediction, Y_test)
    # print('Accuracy is', test_data_accuracy)

    # input_data = (2,197,70,45,543,30.5,0.158,53)

    #changing the input data to the numpy array
    input_data_as_numpy_array = np.asarray(input_data)

    #reshape the array as we are predicting for one instance

    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)

    #standardize the input data
    std_data = scaler.transform(input_data_reshaped)

    # print(std_data)

    prediction = classifier.predict(std_data)

    # print(prediction)
    print(prediction[0])
    if(prediction[0] == 0 ):
        return 'The Person is not diabetic'
    else:
        return 'The Person is diabetic'

  
# def predict_parkinson(input_data):

 # Load the data from CSV file into a Pandas DataFrame
    parkinsons_data = pd.read_csv('C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/parkinsons.csv')

    # Extract features and target variable
    X = parkinsons_data.drop(columns=['name', 'status'], axis=1)
    Y = parkinsons_data['status']

    # Split the data into training and testing sets
    # X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)

    # Standardize the features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X)
    # X_test_scaled = scaler.transform(X_test)

    # Initialize the SVM model
    model = svm.SVC(kernel='linear')

    # Train the SVM model
    model.fit(X_train_scaled, Y)

    # Predict on training and testing data
    train_predictions = model.predict(X_train_scaled)
    # test_predictions = model.predict(X_test_scaled)

    # Calculate accuracy scores
    training_data_accuracy = accuracy_score(Y, train_predictions)
    # test_data_accuracy = accuracy_score(Y_test, test_predictions)

    print('Accuracy score of training data:', training_data_accuracy)
    # print('Accuracy score of test data:', test_data_accuracy)

    # Standardize the input data
    input_data_scaled = scaler.transform([input_data])
    
    # Make prediction on input data
    prediction = model.predict(input_data_scaled)
    print(prediction[0])
    if prediction[0] == 0:
        return "The Person does not have Parkinson's Disease"
    else:
        return "The Person has Parkinson's Disease"

def load_or_train_model_parkinson():
    model_file = 'C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/parkinson_model.joblib'
    scaler_file = 'C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/parkinson_scaler.joblib'
    
    # If both model and scaler files exist, load and return them
    if os.path.exists(model_file) and os.path.exists(scaler_file):
        print("Loading pre-trained model and scaler for Parkinson's disease prediction...")
        model = joblib.load(model_file)
        scaler = joblib.load(scaler_file)
        return model, scaler
    
    # If either model or scaler file doesn't exist, perform training and save the model and scaler
    print("Training the model for Parkinson's disease prediction...")
    
    # Load the data from CSV file into a Pandas DataFrame
    parkinsons_data = pd.read_csv('C:/Users/pritd/OneDrive/Desktop/Machine_Learning/DiseaseShield/predict/ml_models/parkinsons.csv')

    # Extract features and target variable
    X = parkinsons_data.drop(columns=['name', 'status'], axis=1)
    Y = parkinsons_data['status']

    # Standardize the features
    scaler = StandardScaler()
    scaler.fit(X)
    X_scaled = scaler.transform(X)

    # Initialize the SVM model
    model = svm.SVC(kernel='linear')

    # Train the SVM model
    model.fit(X_scaled, Y)

    # Save the model and scaler
    print("Saving the trained model and scaler for Parkinson's disease prediction...")
    joblib.dump(model, model_file)
    joblib.dump(scaler, scaler_file)
    
    return model, scaler

def predict_parkinson(input_data):
    # Load or train the model and scaler
    model, scaler = load_or_train_model_parkinson()

    # Standardize the input data using the loaded scaler
    input_data_scaled = scaler.transform([input_data])
    
    # Make prediction on input data
    prediction = model.predict(input_data_scaled)
    print(prediction[0])
    if (prediction[0] == 0):
        return "The person does not have Parkinson's disease"
    else:
        return "The person has Parkinson's disease"