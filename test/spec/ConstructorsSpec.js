describe('Constructor functions', function() {
  // problem 1
  describe('Car Factory', function() {
    it('CarFactory function should exist', function() {
      expect(CarFactory).toBeDefined();
    });
    it('CarFactory should be a function', function() {
      expect(CarFactory).toEqual(jasmine.any(Function));
    });
    it('Should build car objects', function() {
      var mustang = new CarFactory('Ford', 'Mustang');
      expect(mustang).toEqual(jasmine.any(Object));
    });
    it('Objects have make & model properties', function() {
      var mustang = new CarFactory('Ford', 'Mustang');
      expect(mustang.model).toEqual('Mustang');
      expect(mustang.make).toEqual('Ford');
    });
  });
  // problem 2
  describe('Employee', function() {
    it('bob variable should exist', function() {
      expect(bob).toBeDefined();
    });
    it('bob should be an object', function() {
      expect(bob).toEqual(jasmine.any(Object));
    });
    it('bob should have name, email, and hireDate properties', function() {
      expect(bob.name).toEqual('Bob');
      expect(bob.email).toEqual('bob@gmail.com');
      expect(bob.hireDate).toEqual('01-02-98');
    });
  });
  // problem 3
  describe('Car', function() {
    it('should exist', function() {
      expect(Car).toBeDefined();
    });
    it('should be a function', function() {
      expect(Car).toEqual(jasmine.any(Function));
    });
    it('should return an object when invoked with new (var prius = new Car(...))', function() {
      var car = new Car('Toyota', 'Prius', 2015);
      expect(car).toEqual(jasmine.any(Object));
    });
    describe('return object', function() {
      it('should have a moveCar method', function() {
        var car = new Car('Toyota', 'Prius', 2015);
        expect(typeof car.moveCar).toBe('function');
        expect(car.moveCar).toEqual(jasmine.any(Function));
      });
      describe('moveCar', function() {
        it('should return a number', function() {
          var car = new Car('Toyota', 'Prius', 2015);
          expect(car.moveCar()).toEqual(jasmine.any(Number));
        });
      });
    });
  });
  // problem 4
  describe('Movie', function() {
    var m = new Movie('Gone with the Tornado', 'Comedy', 72);
    it('should exist', function() {
      expect(Movie).toBeDefined();
    });
    it('should have a method', function() {
      expect(m.changeRating).toEqual(jasmine.any(Function));
    });
    it('method should be a prototype', function() {
      expect(Object.getPrototypeOf(m).changeRating).toEqual(
        jasmine.any(Function)
      );
    });
    describe('changeRating method', function() {
      it('method should return a number', function() {
        expect(m.changeRating(86)).toEqual(jasmine.any(Number));
      });
      it('should change the original rating', function() {
        m.changeRating(84);
        expect(m.rating).not.toEqual(84);
      });
    });
  });
  // problem 5
  describe('User', function() {
    var posts = [{ id: 1, title: 'Log Cabin', rating: 4 }];
    var u = new User('Harrietta', 54, 'quiltingQueen@sew.ing', posts);
    it('should exist', function() {
      expect(User).toBeDefined();
    });
    it('should be a function', function() {
      expect(User).toEqual(jasmine.any(Function));
    });
    it('should create an object with 4 properties', function() {
      expect(u.name).toEqual('Harrietta');
      expect(u.age).toEqual(54);
      expect(u.email).toEqual('quiltingQueen@sew.ing');
      expect(Array.isArray(u.savedPosts)).toBe(true);
    });
    describe('addSavedPost', function() {
      it('should exist', function() {
        expect(u.addSavedPost).toBeDefined();
      });
      it('should be a prototype method', function() {
        expect(Object.getPrototypeOf(u).addSavedPost).toEqual(
          jasmine.any(Function)
        );
      });
      it('should save a new object to the savedPosts array', function() {
        u.addSavedPost(2, 'Hard Core Quilting', 5);
        expect(u.savedPosts.length).toBe(2);
        expect(u.savedPosts.filter(e => e.id === 2).length).toBe(1);
      });
    });
  });
  // problem 6
  describe('removeSavedPost', function() {
    var posts = [{ id: 1, title: 'Log Cabin', rating: 4 }];
    var u = new User('Harrietta', 54, 'quiltingQueen@sew.ing', posts);
    it('should exist', function() {
      expect(u.removeSavedPost).toBeDefined();
    });
    it('should be a prototype method', function() {
      expect(Object.getPrototypeOf(u).removeSavedPost).toEqual(
        jasmine.any(Function)
      );
    });
    it('should remove an object from the savedPosts array', function() {
      u.addSavedPost(2, 'Hard Core Quilting', 5);
      u.removeSavedPost(2);
      expect(u.savedPosts.length).toBe(1);
      expect(u.savedPosts.filter(e => e.id === 2).length).toBe(0);
    });
  });
  // problem 7
  describe('changePostRating', function() {
    var posts = [{ id: 1, title: 'Log Cabin', rating: 4 }];
    var u = new User('Harrietta', 54, 'quiltingQueen@sew.ing', posts);
    it('should exist', function() {
      expect(u.changePostRating).toBeDefined();
    });
    it('should be a prototype method', function() {
      expect(Object.getPrototypeOf(u).changePostRating).toEqual(
        jasmine.any(Function)
      );
    });
    it('should update the rating for object from the savedPosts array', function() {
      u.addSavedPost(2, 'Hard Core Quilting', 5);
      u.changePostRating(2, 3);
      u.changePostRating(1, 5);
      expect(u.savedPosts.filter(e => e.id === 2)[0].rating).toBe(3);
      expect(u.savedPosts.filter(e => e.id === 1)[0].rating).toBe(5);
    });
  });
});
