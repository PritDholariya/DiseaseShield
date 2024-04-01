def predict_diabetes(input_data):
    #loading the diabets datasets to a pandas Dataframe
    diabetes_dataset = pd.read_csv('E:/sem6/SDP/DiseaseShield/predict/ml_models/diabetes.csv')


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
    parkinsons_data = pd.read_csv('E:/sem6/SDP/DiseaseShield/predict/ml_models/parkinsons.csv')

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

