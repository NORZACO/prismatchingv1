#!/bin/bash

# Function to display the menu
show_menu() {
  echo "Prisma commands:"
  echo "1) prisma init"
  echo "2) prisma generate"
  echo "3) prisma db"
  echo "4) prisma migrate"
  echo "5) prisma studio"
  echo "6) prisma validate"
  echo "7) prisma format"
  echo "8) prisma migrate dev"
  echo "9) prisma db pull"
  echo "10) prisma db push"
  echo -n "Please select an option [1-10]: "
}

# Function to run the selected command
run_command() {
  case $1 in
    1) npx prisma init;;
    2) npx prisma generate;;
    3) npx prisma db;;
    4) npx prisma migrate;;
    5) npx prisma studio;;
    6) npx prisma validate;;
    7) npx prisma format;;
    8) npx prisma migrate dev;;
    9) npx prisma db pull;;
    10) npx prisma db push;;
    *) echo "Invalid option";;
  esac
}

# Main script execution
while true; do
  show_menu
  read option
  run_command $option
  echo -n "Do you want to run another command? (yes/no): "
  read answer
  if [[ $answer != "yes" ]]; then
    break
  fi
done
