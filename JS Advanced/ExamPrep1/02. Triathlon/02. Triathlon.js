class Triathlon {
  constructor(competitionName) {
    this.competitionName = competitionName;
    this.participants = {};
    this.listOfFinalists = [];
  }

  addParticipant(participantName, participantGender) {
    if (
      this.participants.hasOwnProperty(participantName) &&
      this.participants[participantName] === participantGender
    ) {
      return `${participantName} has already been added to the list`;
    } else {
      this.participants[participantName] = participantGender;
      return `A new participant has been added - ${participantName}`;
    }
  }

  completeness(participantName, condition) {
    if (!this.participants.hasOwnProperty(participantName)) {
      throw new Error(
        `${participantName} is not in the current participants list`
      );
    }

    if (condition < 30) {
      throw new Error(
        `${participantName} is not well prepared and cannot finish any discipline`
      );
    }

    const completedCount = Math.floor(condition / 30);
    if (completedCount < 3) {
      return `${participantName} could only complete ${completedCount} of the disciplines`;
    } else {
      this.listOfFinalists.push({
        participantName,
        participantGender: this.participants[participantName],
      });
      return `Congratulations, ${participantName} finished the whole competition`;
    }
  }

  rewarding(participantName) {
    let matchedParticipant;
    for (let finalist of this.listOfFinalists) {
      if (finalist.participantName === participantName) {
        matchedParticipant = participantName;
      }
    }

    if (!matchedParticipant) {
      return `${participantName} is not in the current finalists list`;
    } else {
      return `${participantName} was rewarded with a trophy for his performance`;
    }
  }

  showRecord(criteria) {
    if (this.listOfFinalists.length === 0) {
      return `There are no finalists in this competition`;
    }

    let firstOfType;
    if (criteria === "male" || criteria === "female") {
      for (let finalist of this.listOfFinalists) {
        if (finalist.participantGender === criteria) {
          firstOfType = finalist;
          break;
        }
      }

      if (firstOfType) {
        return `${firstOfType.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
      } else {
        return `There are no ${criteria}'s that finished the competition`;
      }
    }

    if (criteria === "all") {
      const sortedFinalists = this.listOfFinalists.sort((a, b) =>
        a.participantName.localeCompare(b.participantName)
      );

      let res = [`List of all ${this.competitionName} finalists:`];
      sortedFinalists.forEach((el) => res.push(`${el.participantName}`));
      return res.join("\n");
    }
  }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Todor", "male"));
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Todor", 100));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 70));
console.log(contest.rewarding("Todor"));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));
